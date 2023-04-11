import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateBuildServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateBuildCreateBuildRequest extends SpeakeasyBase {
    /**
     * The list of Asset Version resource SIDs to include in the Build.
     */
    assetVersions?: string[];
    /**
     * A list of objects that describe the Dependencies included in the Build. Each object contains the `name` and `version` of the dependency.
     */
    dependencies?: string;
    /**
     * The list of the Function Version resource SIDs to include in the Build.
     */
    functionVersions?: string[];
    /**
     * The Runtime version that will be used to run the Build resource when it is deployed.
     */
    runtime?: string;
}
export declare class CreateBuildRequest extends SpeakeasyBase {
    requestBody?: CreateBuildCreateBuildRequest;
    /**
     * The SID of the Service to create the Build resource under.
     */
    serviceSid: string;
}
export declare class CreateBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    serverlessV1ServiceBuild?: shared.ServerlessV1ServiceBuild;
}
