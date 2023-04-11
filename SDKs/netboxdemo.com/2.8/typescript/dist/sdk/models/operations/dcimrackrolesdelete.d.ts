import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimRackRolesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack role.
     */
    id: number;
}
export declare class DcimRackRolesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
