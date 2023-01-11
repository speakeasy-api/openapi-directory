import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteJobByIdPathParams extends SpeakeasyBase {
    id: string;
}
/**
 * Problem details object returned on errors
**/
export declare class DeleteJobById404ApplicationProblemPlusJson extends SpeakeasyBase {
    status?: number;
    title?: string;
    type?: string;
}
/**
 * Problem details object returned on errors
**/
export declare class DeleteJobById409ApplicationProblemPlusJson extends SpeakeasyBase {
    allowedValues?: string[];
    currentValue?: string;
    detail?: string;
    status?: number;
    title?: string;
    type?: string;
}
export declare class DeleteJobByIdRequest extends SpeakeasyBase {
    pathParams: DeleteJobByIdPathParams;
}
export declare class DeleteJobByIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteJobById401ApplicationProblemPlusJsonAny?: any;
    deleteJobById404ApplicationProblemPlusJsonObject?: DeleteJobById404ApplicationProblemPlusJson;
    deleteJobById409ApplicationProblemPlusJsonObject?: DeleteJobById409ApplicationProblemPlusJson;
    statusCode: number;
}
