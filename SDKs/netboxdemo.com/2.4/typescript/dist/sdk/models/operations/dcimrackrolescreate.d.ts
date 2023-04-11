import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    rackRole?: shared.RackRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
