import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointGetByTypeRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of the types to return. Max. approx. 12 types.
     *
     * @remarks
     *             A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint.
     */
    types: string[];
}
export declare class StopPointGetByTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
