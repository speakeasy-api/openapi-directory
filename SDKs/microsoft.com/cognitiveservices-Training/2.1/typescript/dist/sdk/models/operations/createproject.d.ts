import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of classifier to create for this project
 */
export declare enum CreateProjectClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The type of classifier to create for this project
     */
    classificationType?: CreateProjectClassificationTypeEnum;
    /**
     * The description of the project
     */
    description?: string;
    /**
     * The id of the domain to use for this project. Defaults to General
     */
    domainId?: string;
    /**
     * Name of the project
     */
    name: string;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
