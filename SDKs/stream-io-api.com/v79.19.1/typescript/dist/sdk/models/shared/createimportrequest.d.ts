import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateImportRequestModeEnum {
    Insert = "insert",
    Upsert = "upsert"
}
export declare class CreateImportRequest extends SpeakeasyBase {
    mode?: CreateImportRequestModeEnum;
    path: string;
}
