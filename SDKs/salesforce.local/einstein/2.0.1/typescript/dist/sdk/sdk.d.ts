import { Authorization } from "./authorization";
import { CheckAPIUsage } from "./checkapiusage";
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
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://salesforce.local"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Provided by [Salesforce](https://www.einstein-hub.com/)  � Copyright 2000�2020 salesforce.com, inc. All rights reserved. Salesforce is a registered trademark of salesforce.com, inc., as are other names and marks. Other marks appearing herein may be trademarks of their respective owners. **Last updated:** Aug 17, 2020
 *
 * @see {@link https://metamind.readme.io} - For more information, see the Einstein Platform Services Developer Guide
 */
export declare class SDK {
    /**
     * Resources that manage authorization tokens.
     */
    authorization: Authorization;
    /**
     * Resources that let you get API usage information.
     */
    checkAPIUsage: CheckAPIUsage;
    /**
     * Resources that manage text datasets.
     */
    languageDatasets: LanguageDatasets;
    /**
     * Resources that manage text examples.
     */
    languageExamples: LanguageExamples;
    /**
     * Resources that manage text models and model metrics.
     */
    languageModels: LanguageModels;
    /**
     * Resources that return predictions for text input.
     */
    languagePrediction: LanguagePrediction;
    /**
     * Resources that handle text dataset training.
     */
    languageTraining: LanguageTraining;
    /**
     * Resources that manage image datasets.
     */
    visionDatasets: VisionDatasets;
    /**
     * Resources that manage image examples.
     */
    visionExamples: VisionExamples;
    /**
     * Resources that manage image models and model metrics.
     */
    visionModels: VisionModels;
    /**
     * Resources that return predictions for image input.
     */
    visionPrediction: VisionPrediction;
    /**
     * Resources that handle image dataset training.
     */
    visionTraining: VisionTraining;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
