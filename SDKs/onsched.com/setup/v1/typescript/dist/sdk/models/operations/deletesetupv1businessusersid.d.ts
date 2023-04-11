import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1BusinessusersIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1BusinessusersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
