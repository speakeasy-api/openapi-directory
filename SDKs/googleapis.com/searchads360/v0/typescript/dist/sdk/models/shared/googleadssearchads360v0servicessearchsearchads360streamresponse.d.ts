import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0ServicesCustomColumnHeader } from "./googleadssearchads360v0servicescustomcolumnheader";
import { GoogleAdsSearchads360V0ServicesSearchAds360Row } from "./googleadssearchads360v0servicessearchads360row";
/**
 * Response message for SearchAds360Service.SearchStream.
 */
export declare class GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamResponse extends SpeakeasyBase {
    /**
     * The headers of the custom columns in the results.
     */
    customColumnHeaders?: GoogleAdsSearchads360V0ServicesCustomColumnHeader[];
    /**
     * FieldMask that represents what fields were requested by the user.
     */
    fieldMask?: string;
    /**
     * The unique id of the request that is used for debugging purposes.
     */
    requestId?: string;
    /**
     * The list of rows that matched the query.
     */
    results?: GoogleAdsSearchads360V0ServicesSearchAds360Row[];
    /**
     * A returned row from the query.
     */
    summaryRow?: GoogleAdsSearchads360V0ServicesSearchAds360Row;
}
