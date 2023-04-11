import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutGroupsIdRequest extends SpeakeasyBase {
    group: shared.Group;
    id: number;
}
export declare class PutGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
