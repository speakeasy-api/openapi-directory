import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutMaintenanceIdRequest extends SpeakeasyBase {
    maintenance: shared.Maintenance;
    id: number;
}
export declare class PutMaintenanceIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    maintenance?: shared.Maintenance;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
