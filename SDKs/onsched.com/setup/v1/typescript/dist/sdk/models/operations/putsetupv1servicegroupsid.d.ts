import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ServicegroupsIdRequest extends SpeakeasyBase {
    serviceGroupInputModel?: shared.ServiceGroupInputModel;
    /**
     * id of serviceGroup object
     */
    id: number;
}
export declare class PutSetupV1ServicegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceGroupViewModel?: shared.ServiceGroupViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
