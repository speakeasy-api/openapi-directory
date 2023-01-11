import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EchoQueryParams extends SpeakeasyBase {
    text?: string;
}
export declare class EchoRequest extends SpeakeasyBase {
    queryParams: EchoQueryParams;
}
export declare class EchoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testEcho?: shared.TestEcho;
}
