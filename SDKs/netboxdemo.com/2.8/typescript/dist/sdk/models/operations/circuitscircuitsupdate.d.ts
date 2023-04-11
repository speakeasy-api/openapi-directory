import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitsUpdateRequest extends SpeakeasyBase {
    writableCircuitInput: shared.WritableCircuitInput;
    /**
     * A unique integer value identifying this circuit.
     */
    id: number;
}
export declare class CircuitsCircuitsUpdateResponse extends SpeakeasyBase {
    circuit?: shared.Circuit;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
