import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineGetByModeRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of modes e.g. tube,dlr
     */
    modes: string[];
}
export declare class LineGetByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
