import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEnergyCostRequest extends SpeakeasyBase {
    /**
     * The values you wish to assign.
     */
    groupConfiguration?: shared.GroupConfiguration;
    /**
     * The ID of the group.
     */
    groupId: string;
}
export declare class UpdateEnergyCostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
