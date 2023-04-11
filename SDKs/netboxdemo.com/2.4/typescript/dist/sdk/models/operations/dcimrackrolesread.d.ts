import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackRolesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack role.
     */
    id: number;
}
export declare class DcimRackRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    rackRole?: shared.RackRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
