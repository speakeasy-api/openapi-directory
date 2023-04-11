import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this circuit.
     */
    id: number;
}
export declare class CircuitsCircuitsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
