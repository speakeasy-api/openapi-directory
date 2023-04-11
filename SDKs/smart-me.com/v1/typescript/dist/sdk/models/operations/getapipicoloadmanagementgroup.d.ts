import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiPicoLoadmanagementgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    picoLoadmanagementGroupDtos?: shared.PicoLoadmanagementGroupDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
