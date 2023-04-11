import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackRolesUpdateRequest extends SpeakeasyBase {
    rackRoleInput: shared.RackRoleInput;
    /**
     * A unique integer value identifying this rack role.
     */
    id: number;
}
export declare class DcimRackRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackRole?: shared.RackRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
