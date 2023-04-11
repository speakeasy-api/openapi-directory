import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimVirtualChassisDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this virtual chassis.
     */
    id: number;
}
export declare class DcimVirtualChassisDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
