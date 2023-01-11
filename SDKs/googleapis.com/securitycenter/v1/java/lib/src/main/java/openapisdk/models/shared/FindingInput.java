package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingInput
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
public class FindingInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public Access access;
    public FindingInput withAccess(Access access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalName")
    public String canonicalName;
    public FindingInput withCanonicalName(String canonicalName) {
        this.canonicalName = canonicalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public FindingInput withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compliances")
    public Compliance[] compliances;
    public FindingInput withCompliances(Compliance[] compliances) {
        this.compliances = compliances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connections")
    public Connection[] connections;
    public FindingInput withConnections(Connection[] connections) {
        this.connections = connections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public Container[] containers;
    public FindingInput withContainers(Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public FindingInput withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public Database database;
    public FindingInput withDatabase(Database database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FindingInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTime")
    public String eventTime;
    public FindingInput withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exfiltration")
    public Exfiltration exfiltration;
    public FindingInput withExfiltration(Exfiltration exfiltration) {
        this.exfiltration = exfiltration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalUri")
    public String externalUri;
    public FindingInput withExternalUri(String externalUri) {
        this.externalUri = externalUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public File[] files;
    public FindingInput withFiles(File[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingClass")
    public FindingFindingClassEnum findingClass;
    public FindingInput withFindingClass(FindingFindingClassEnum findingClass) {
        this.findingClass = findingClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamBindings")
    public IamBinding[] iamBindings;
    public FindingInput withIamBindings(IamBinding[] iamBindings) {
        this.iamBindings = iamBindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indicator")
    public Indicator indicator;
    public FindingInput withIndicator(Indicator indicator) {
        this.indicator = indicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernelRootkit")
    public KernelRootkit kernelRootkit;
    public FindingInput withKernelRootkit(KernelRootkit kernelRootkit) {
        this.kernelRootkit = kernelRootkit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetes")
    public Kubernetes kubernetes;
    public FindingInput withKubernetes(Kubernetes kubernetes) {
        this.kubernetes = kubernetes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mitreAttack")
    public MitreAttack mitreAttack;
    public FindingInput withMitreAttack(MitreAttack mitreAttack) {
        this.mitreAttack = mitreAttack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute")
    public FindingMuteEnum mute;
    public FindingInput withMute(FindingMuteEnum mute) {
        this.mute = mute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("muteInitiator")
    public String muteInitiator;
    public FindingInput withMuteInitiator(String muteInitiator) {
        this.muteInitiator = muteInitiator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FindingInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextSteps")
    public String nextSteps;
    public FindingInput withNextSteps(String nextSteps) {
        this.nextSteps = nextSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public FindingInput withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processes")
    public Process[] processes;
    public FindingInput withProcesses(Process[] processes) {
        this.processes = processes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public FindingInput withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityMarks")
    public SecurityMarks securityMarks;
    public FindingInput withSecurityMarks(SecurityMarks securityMarks) {
        this.securityMarks = securityMarks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public FindingSeverityEnum severity;
    public FindingInput withSeverity(FindingSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceProperties")
    public java.util.Map<String, Object> sourceProperties;
    public FindingInput withSourceProperties(java.util.Map<String, Object> sourceProperties) {
        this.sourceProperties = sourceProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FindingStateEnum state;
    public FindingInput withState(FindingStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerability")
    public Vulnerability vulnerability;
    public FindingInput withVulnerability(Vulnerability vulnerability) {
        this.vulnerability = vulnerability;
        return this;
    }
}