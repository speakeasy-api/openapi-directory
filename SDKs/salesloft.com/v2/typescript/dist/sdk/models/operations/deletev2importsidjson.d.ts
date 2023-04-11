import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2ImportsIdJsonRequest extends SpeakeasyBase {
    /**
     * Import ID
     */
    id: string;
    /**
     * Whether to delete people on this Import. Possible values are: [not present], all, single.
     *
     * @remarks
     *
     * 'single' will delete people who are only present in this Import.
     * 'all' will delete people even if they are present in other Imports.
     * Not specifying this parameter will not delete any people
     *
     */
    undo?: string;
}
export declare class DeleteV2ImportsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
