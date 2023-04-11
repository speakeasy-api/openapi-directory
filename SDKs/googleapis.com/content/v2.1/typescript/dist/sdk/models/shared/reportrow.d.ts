import { SpeakeasyBase } from "../../../internal/utils";
import { BestSellers } from "./bestsellers";
import { Brand } from "./brand";
import { Metrics } from "./metrics";
import { PriceCompetitiveness } from "./pricecompetitiveness";
import { PriceInsights } from "./priceinsights";
import { ProductCluster } from "./productcluster";
import { ProductView } from "./productview";
import { Segments } from "./segments";
/**
 * Result row returned from the search query.
 */
export declare class ReportRow extends SpeakeasyBase {
    /**
     * Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679).
     */
    bestSellers?: BestSellers;
    /**
     * Brand fields. Values are only set for fields requested explicitly in the request's search query.
     */
    brand?: Brand;
    /**
     * Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
     */
    metrics?: Metrics;
    /**
     * Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
     */
    priceCompetitiveness?: PriceCompetitiveness;
    /**
     * Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
     */
    priceInsights?: PriceInsights;
    /**
     * Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
     */
    productCluster?: ProductCluster;
    /**
     * Product fields. Values are only set for fields requested explicitly in the request's search query.
     */
    productView?: ProductView;
    /**
     * Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
     */
    segments?: Segments;
}
