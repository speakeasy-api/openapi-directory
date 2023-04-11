import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesCampaignsIdSyndicateFormatRequest extends SpeakeasyBase {
    /**
     * Method used to render an html request. Accepts one: [mv, list, feed]
     */
    displayMethod?: string;
    /**
     * Automatically added
     */
    format: string;
    /**
     * The id of the record to look up
     */
    id: number;
}
export declare class GetResourcesCampaignsIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Renders the list of MediaItems associated with the Tag identified by the 'id'.
     */
    syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
