import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTypesCreateResponse extends SpeakeasyBase {
    circuitType?: shared.CircuitType;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
