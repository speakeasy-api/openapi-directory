import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1InstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Result
     */
    instance?: shared.Instance;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
