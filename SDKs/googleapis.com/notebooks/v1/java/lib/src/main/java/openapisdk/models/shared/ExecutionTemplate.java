package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionTemplate
 * The description a notebook execution workload.
**/
public class ExecutionTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorConfig")
    public SchedulerAcceleratorConfig acceleratorConfig;
    public ExecutionTemplate withAcceleratorConfig(SchedulerAcceleratorConfig acceleratorConfig) {
        this.acceleratorConfig = acceleratorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImageUri")
    public String containerImageUri;
    public ExecutionTemplate withContainerImageUri(String containerImageUri) {
        this.containerImageUri = containerImageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataprocParameters")
    public DataprocParameters dataprocParameters;
    public ExecutionTemplate withDataprocParameters(DataprocParameters dataprocParameters) {
        this.dataprocParameters = dataprocParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputNotebookFile")
    public String inputNotebookFile;
    public ExecutionTemplate withInputNotebookFile(String inputNotebookFile) {
        this.inputNotebookFile = inputNotebookFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobType")
    public ExecutionTemplateJobTypeEnum jobType;
    public ExecutionTemplate withJobType(ExecutionTemplateJobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernelSpec")
    public String kernelSpec;
    public ExecutionTemplate withKernelSpec(String kernelSpec) {
        this.kernelSpec = kernelSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ExecutionTemplate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterType")
    public String masterType;
    public ExecutionTemplate withMasterType(String masterType) {
        this.masterType = masterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputNotebookFolder")
    public String outputNotebookFolder;
    public ExecutionTemplate withOutputNotebookFolder(String outputNotebookFolder) {
        this.outputNotebookFolder = outputNotebookFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public String parameters;
    public ExecutionTemplate withParameters(String parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paramsYamlFile")
    public String paramsYamlFile;
    public ExecutionTemplate withParamsYamlFile(String paramsYamlFile) {
        this.paramsYamlFile = paramsYamlFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleTier")
    public ExecutionTemplateScaleTierEnum scaleTier;
    public ExecutionTemplate withScaleTier(ExecutionTemplateScaleTierEnum scaleTier) {
        this.scaleTier = scaleTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ExecutionTemplate withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tensorboard")
    public String tensorboard;
    public ExecutionTemplate withTensorboard(String tensorboard) {
        this.tensorboard = tensorboard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vertexAiParameters")
    public VertexAiParameters vertexAiParameters;
    public ExecutionTemplate withVertexAiParameters(VertexAiParameters vertexAiParameters) {
        this.vertexAiParameters = vertexAiParameters;
        return this;
    }
}