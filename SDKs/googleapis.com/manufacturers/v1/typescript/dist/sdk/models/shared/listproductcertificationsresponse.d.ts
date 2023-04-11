import { SpeakeasyBase } from "../../../internal/utils";
import { ProductCertification } from "./productcertification";
/**
 * Response for ListProductCertifications method.
 */
export declare class ListProductCertificationsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The product certifications from the specified certification body.
     */
    productCertifications?: ProductCertification[];
}
