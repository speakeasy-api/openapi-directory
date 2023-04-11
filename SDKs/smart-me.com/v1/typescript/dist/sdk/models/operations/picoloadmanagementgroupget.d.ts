import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PicoLoadmanagementGroupGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class PicoLoadmanagementGroupGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    picoLoadmanagementGroupDto?: shared.PicoLoadmanagementGroupDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
