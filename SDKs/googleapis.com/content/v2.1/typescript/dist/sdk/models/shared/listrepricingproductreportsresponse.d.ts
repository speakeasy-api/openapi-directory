import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingProductReport } from "./repricingproductreport";
/**
 * Response message for the ListRepricingProductReports method.
 */
export declare class ListRepricingProductReportsResponse extends SpeakeasyBase {
    /**
     * A token for retrieving the next page. Its absence means there is no subsequent page.
     */
    nextPageToken?: string;
    /**
     * Periodic reports for the given Repricing product.
     */
    repricingProductReports?: RepricingProductReport[];
}
