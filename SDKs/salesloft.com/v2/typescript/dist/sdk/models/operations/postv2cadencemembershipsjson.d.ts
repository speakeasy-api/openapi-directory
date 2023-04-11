import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2CadenceMembershipsJsonRequest extends SpeakeasyBase {
    /**
     * ID of the cadence to create a cadence membership for
     */
    cadenceId: number;
    /**
     * ID of the person to create a cadence membership for
     */
    personId: number;
    /**
     * ID of the step on which the person should start the cadence. Start on first step is the default behavior without this parameter.
     */
    stepId?: number;
    /**
     * ID of the user to create a cadence membership for. The associated cadence must be owned by the user, or it must be a team cadence
     */
    userId?: number;
}
export declare class PostV2CadenceMembershipsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
