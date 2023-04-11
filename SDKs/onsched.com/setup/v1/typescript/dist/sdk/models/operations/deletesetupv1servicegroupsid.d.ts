import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ServicegroupsIdRequest extends SpeakeasyBase {
    /**
     * id of serviceGroup object
     */
    id: number;
}
export declare class DeleteSetupV1ServicegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceGroupViewModel?: shared.ServiceGroupViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
