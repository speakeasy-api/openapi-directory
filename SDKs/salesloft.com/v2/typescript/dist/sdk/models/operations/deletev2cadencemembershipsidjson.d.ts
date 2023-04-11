import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2CadenceMembershipsIdJsonRequest extends SpeakeasyBase {
    /**
     * CadenceMembership ID
     */
    id: string;
}
export declare class DeleteV2CadenceMembershipsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
