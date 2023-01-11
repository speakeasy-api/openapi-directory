import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAudioRendersSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class CreateAudioRendersRequest extends SpeakeasyBase {
    request: shared.CreateAudioRendersRequest;
    security: CreateAudioRendersSecurity;
}
export declare class CreateAudioRendersResponse extends SpeakeasyBase {
    audioRendersListResults?: any;
    contentType: string;
    statusCode: number;
}
