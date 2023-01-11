package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Instruction
 * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
**/
public class GoogleCloudDatalabelingV1beta1Instruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockingResources")
    public String[] blockingResources;
    public GoogleCloudDatalabelingV1beta1Instruction withBlockingResources(String[] blockingResources) {
        this.blockingResources = blockingResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudDatalabelingV1beta1Instruction withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csvInstruction")
    public GoogleCloudDatalabelingV1beta1CsvInstruction csvInstruction;
    public GoogleCloudDatalabelingV1beta1Instruction withCsvInstruction(GoogleCloudDatalabelingV1beta1CsvInstruction csvInstruction) {
        this.csvInstruction = csvInstruction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum dataType;
    public GoogleCloudDatalabelingV1beta1Instruction withDataType(GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudDatalabelingV1beta1Instruction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudDatalabelingV1beta1Instruction withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1Instruction withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdfInstruction")
    public GoogleCloudDatalabelingV1beta1PdfInstruction pdfInstruction;
    public GoogleCloudDatalabelingV1beta1Instruction withPdfInstruction(GoogleCloudDatalabelingV1beta1PdfInstruction pdfInstruction) {
        this.pdfInstruction = pdfInstruction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudDatalabelingV1beta1Instruction withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}