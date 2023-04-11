import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesSourcesIdJsonRequest extends SpeakeasyBase {
    /**
     * The id of the source to look up
     */
    id: number;
}
export declare class GetResourcesSourcesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the Source identified by the 'id'.
     */
    sourceWrappeds?: shared.SourceWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
