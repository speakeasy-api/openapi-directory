import { SpeakeasyBase } from "../../../internal/utils";
import { ImportTaskHistory } from "./importtaskhistory";
export declare class ImportTask extends SpeakeasyBase {
    createdAt: Date;
    history: ImportTaskHistory[];
    id: string;
    mode: string;
    path: string;
    result?: any;
    size?: number;
    state: string;
    updatedAt: Date;
}
