import { AxiosInstance } from "axios";
import { Authorization } from "./authorization";
import { CheckApiUsage } from "./checkapiusage";
import { LanguageDatasets } from "./languagedatasets";
import { LanguageExamples } from "./languageexamples";
import { LanguageModels } from "./languagemodels";
import { LanguagePrediction } from "./languageprediction";
import { LanguageTraining } from "./languagetraining";
import { VisionDatasets } from "./visiondatasets";
import { VisionExamples } from "./visionexamples";
import { VisionModels } from "./visionmodels";
import { VisionPrediction } from "./visionprediction";
import { VisionTraining } from "./visiontraining";
export declare const ServerList: readonly ["http://salesforce.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    authorization: Authorization;
    checkAPIUsage: CheckApiUsage;
    languageDatasets: LanguageDatasets;
    languageExamples: LanguageExamples;
    languageModels: LanguageModels;
    languagePrediction: LanguagePrediction;
    languageTraining: LanguageTraining;
    visionDatasets: VisionDatasets;
    visionExamples: VisionExamples;
    visionModels: VisionModels;
    visionPrediction: VisionPrediction;
    visionTraining: VisionTraining;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
