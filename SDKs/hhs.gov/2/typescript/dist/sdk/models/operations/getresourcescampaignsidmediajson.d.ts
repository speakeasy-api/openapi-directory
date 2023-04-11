import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesCampaignsIdMediaJsonRequest extends SpeakeasyBase {
    /**
     * The id of the campaign to find media items for
     */
    id: number;
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * The offset of the records set to return for pagination
     */
    offset?: number;
    /**
     * The name of the property to which sorting will be applied
     */
    sort?: string;
}
export declare class GetResourcesCampaignsIdMediaJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list of MediaItems for the Campaign identified by the 'id'.
     */
    mediaItemWrapped?: shared.MediaItemWrapped;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
