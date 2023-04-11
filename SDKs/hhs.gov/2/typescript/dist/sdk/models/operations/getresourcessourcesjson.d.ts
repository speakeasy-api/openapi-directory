import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesSourcesJsonRequest extends SpeakeasyBase {
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * Return records starting at the offset index.
     */
    offset?: number;
    /**
     * The name of the property to which sorting will be applied
     */
    sort?: string;
}
export declare class GetResourcesSourcesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list of Sources.
     */
    sourceWrappeds?: shared.SourceWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
