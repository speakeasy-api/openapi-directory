import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
 */
export declare class V2ApiTarget extends SpeakeasyBase {
    /**
     * Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`
     */
    methods?: string[];
    /**
     * The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use [`gcloud services list`](/sdk/gcloud/reference/services/list) to get a list of services that are enabled in the project.
     */
    service?: string;
}
