import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveEngineRequest extends SpeakeasyBase {
    /**
     * The ID of the engine to use for this request
     *
     * @remarks
     *
     */
    engineId: string;
}
export declare class RetrieveEngineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    engine?: shared.Engine;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
