import { SpeakeasyBase } from "../../../internal/utils";
import { Process } from "./process";
export declare class Project extends SpeakeasyBase {
    /**
     * The Date when the project was created.
     */
    created?: Date;
    /**
     * Id of the file on which the process was applied.
     */
    fileId?: string;
    /**
     * Id of the created project.
     */
    id?: number;
    /**
     * Id of the paypal payment.
     */
    paypalPaymentId?: string;
    process?: Process;
    /**
     * Process which should applied. Processes are "color-classification".
     */
    processId: string;
    /**
     * Number of the created project.
     */
    projectNumber?: number;
    /**
     * Name of the project with which it was saved.
     */
    projectTitle?: string;
    /**
     * Id of the result file which the process created.
     */
    resultFileId?: string;
}
