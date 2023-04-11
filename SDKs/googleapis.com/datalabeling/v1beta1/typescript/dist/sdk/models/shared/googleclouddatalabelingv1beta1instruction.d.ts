import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1CsvInstruction } from "./googleclouddatalabelingv1beta1csvinstruction";
import { GoogleCloudDatalabelingV1beta1PdfInstruction } from "./googleclouddatalabelingv1beta1pdfinstruction";
/**
 * Required. The data type of this instruction.
 */
export declare enum GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Image = "IMAGE",
    Video = "VIDEO",
    Text = "TEXT",
    GeneralData = "GENERAL_DATA"
}
/**
 * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
 */
export declare class GoogleCloudDatalabelingV1beta1Instruction extends SpeakeasyBase {
    /**
     * Output only. The names of any related resources that are blocking changes to the instruction.
     */
    blockingResources?: string[];
    /**
     * Output only. Creation time of instruction.
     */
    createTime?: string;
    /**
     * Deprecated: this instruction format is not supported any more. Instruction from a CSV file.
     */
    csvInstruction?: GoogleCloudDatalabelingV1beta1CsvInstruction;
    /**
     * Required. The data type of this instruction.
     */
    dataType?: GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum;
    /**
     * Optional. User-provided description of the instruction. The description can be up to 10000 characters long.
     */
    description?: string;
    /**
     * Required. The display name of the instruction. Maximum of 64 characters.
     */
    displayName?: string;
    /**
     * Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}
     */
    name?: string;
    /**
     * Instruction from a PDF file.
     */
    pdfInstruction?: GoogleCloudDatalabelingV1beta1PdfInstruction;
    /**
     * Output only. Last update time of instruction.
     */
    updateTime?: string;
}
