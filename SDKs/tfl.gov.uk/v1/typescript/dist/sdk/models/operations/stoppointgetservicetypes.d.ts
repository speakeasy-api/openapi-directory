import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointGetServiceTypesRequest extends SpeakeasyBase {
    /**
     * The Naptan id of the stop
     */
    id: string;
    /**
     * The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty)
     */
    lineIds?: string[];
    /**
     * The modes which the lines are relevant to (all if empty)
     */
    modes?: string[];
}
export declare class StopPointGetServiceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLineServiceTypes?: shared.TflApiPresentationEntitiesLineServiceType[];
}
