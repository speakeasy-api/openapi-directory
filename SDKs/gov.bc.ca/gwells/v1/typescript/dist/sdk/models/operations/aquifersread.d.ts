import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AquifersReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this aquifer.
     */
    aquiferId: number;
}
export declare class AquifersReadResponse extends SpeakeasyBase {
    aquifer?: shared.Aquifer;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
