package shared

type TemplateSummaryDiffBucketsNew struct {
	Description    *string         `json:"description,omitempty"`
	Name           *string         `json:"name,omitempty"`
	RetentionRules []RetentionRule `json:"retentionRules,omitempty"`
}

type TemplateSummaryDiffBucketsOld struct {
	Description    *string         `json:"description,omitempty"`
	Name           *string         `json:"name,omitempty"`
	RetentionRules []RetentionRule `json:"retentionRules,omitempty"`
}

type TemplateSummaryDiffBuckets struct {
	ID               *string                        `json:"id,omitempty"`
	Kind             *TemplateKindEnum              `json:"kind,omitempty"`
	New              *TemplateSummaryDiffBucketsNew `json:"new,omitempty"`
	Old              *TemplateSummaryDiffBucketsOld `json:"old,omitempty"`
	StateStatus      *string                        `json:"stateStatus,omitempty"`
	TemplateMetaName *string                        `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffChecks struct {
	ID               *string           `json:"id,omitempty"`
	Kind             *TemplateKindEnum `json:"kind,omitempty"`
	New              *interface{}      `json:"new,omitempty"`
	Old              *interface{}      `json:"old,omitempty"`
	StateStatus      *string           `json:"stateStatus,omitempty"`
	TemplateMetaName *string           `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffDashboardsNew struct {
	Charts      []TemplateChart `json:"charts,omitempty"`
	Description *string         `json:"description,omitempty"`
	Name        *string         `json:"name,omitempty"`
}

type TemplateSummaryDiffDashboardsOld struct {
	Charts      []TemplateChart `json:"charts,omitempty"`
	Description *string         `json:"description,omitempty"`
	Name        *string         `json:"name,omitempty"`
}

type TemplateSummaryDiffDashboards struct {
	ID               *string                           `json:"id,omitempty"`
	Kind             *TemplateKindEnum                 `json:"kind,omitempty"`
	New              *TemplateSummaryDiffDashboardsNew `json:"new,omitempty"`
	Old              *TemplateSummaryDiffDashboardsOld `json:"old,omitempty"`
	StateStatus      *string                           `json:"stateStatus,omitempty"`
	TemplateMetaName *string                           `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffLabelMappings struct {
	LabelID                  *string `json:"labelID,omitempty"`
	LabelName                *string `json:"labelName,omitempty"`
	LabelTemplateMetaName    *string `json:"labelTemplateMetaName,omitempty"`
	ResourceID               *string `json:"resourceID,omitempty"`
	ResourceName             *string `json:"resourceName,omitempty"`
	ResourceTemplateMetaName *string `json:"resourceTemplateMetaName,omitempty"`
	ResourceType             *string `json:"resourceType,omitempty"`
	Status                   *string `json:"status,omitempty"`
}

type TemplateSummaryDiffLabelsNew struct {
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type TemplateSummaryDiffLabelsOld struct {
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type TemplateSummaryDiffLabels struct {
	ID               *string                       `json:"id,omitempty"`
	Kind             *TemplateKindEnum             `json:"kind,omitempty"`
	New              *TemplateSummaryDiffLabelsNew `json:"new,omitempty"`
	Old              *TemplateSummaryDiffLabelsOld `json:"old,omitempty"`
	StateStatus      *string                       `json:"stateStatus,omitempty"`
	TemplateMetaName *string                       `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffNotificationEndpoints struct {
	ID               *string           `json:"id,omitempty"`
	Kind             *TemplateKindEnum `json:"kind,omitempty"`
	New              *interface{}      `json:"new,omitempty"`
	Old              *interface{}      `json:"old,omitempty"`
	StateStatus      *string           `json:"stateStatus,omitempty"`
	TemplateMetaName *string           `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffNotificationRulesNewStatusRules struct {
	CurrentLevel  *string `json:"currentLevel,omitempty"`
	PreviousLevel *string `json:"previousLevel,omitempty"`
}

type TemplateSummaryDiffNotificationRulesNewTagRules struct {
	Key      *string `json:"key,omitempty"`
	Operator *string `json:"operator,omitempty"`
	Value    *string `json:"value,omitempty"`
}

type TemplateSummaryDiffNotificationRulesNew struct {
	Description     *string                                              `json:"description,omitempty"`
	EndpointID      *string                                              `json:"endpointID,omitempty"`
	EndpointName    *string                                              `json:"endpointName,omitempty"`
	EndpointType    *string                                              `json:"endpointType,omitempty"`
	Every           *string                                              `json:"every,omitempty"`
	MessageTemplate *string                                              `json:"messageTemplate,omitempty"`
	Name            *string                                              `json:"name,omitempty"`
	Offset          *string                                              `json:"offset,omitempty"`
	Status          *string                                              `json:"status,omitempty"`
	StatusRules     []TemplateSummaryDiffNotificationRulesNewStatusRules `json:"statusRules,omitempty"`
	TagRules        []TemplateSummaryDiffNotificationRulesNewTagRules    `json:"tagRules,omitempty"`
}

type TemplateSummaryDiffNotificationRulesOldStatusRules struct {
	CurrentLevel  *string `json:"currentLevel,omitempty"`
	PreviousLevel *string `json:"previousLevel,omitempty"`
}

type TemplateSummaryDiffNotificationRulesOldTagRules struct {
	Key      *string `json:"key,omitempty"`
	Operator *string `json:"operator,omitempty"`
	Value    *string `json:"value,omitempty"`
}

type TemplateSummaryDiffNotificationRulesOld struct {
	Description     *string                                              `json:"description,omitempty"`
	EndpointID      *string                                              `json:"endpointID,omitempty"`
	EndpointName    *string                                              `json:"endpointName,omitempty"`
	EndpointType    *string                                              `json:"endpointType,omitempty"`
	Every           *string                                              `json:"every,omitempty"`
	MessageTemplate *string                                              `json:"messageTemplate,omitempty"`
	Name            *string                                              `json:"name,omitempty"`
	Offset          *string                                              `json:"offset,omitempty"`
	Status          *string                                              `json:"status,omitempty"`
	StatusRules     []TemplateSummaryDiffNotificationRulesOldStatusRules `json:"statusRules,omitempty"`
	TagRules        []TemplateSummaryDiffNotificationRulesOldTagRules    `json:"tagRules,omitempty"`
}

type TemplateSummaryDiffNotificationRules struct {
	ID               *string                                  `json:"id,omitempty"`
	Kind             *TemplateKindEnum                        `json:"kind,omitempty"`
	New              *TemplateSummaryDiffNotificationRulesNew `json:"new,omitempty"`
	Old              *TemplateSummaryDiffNotificationRulesOld `json:"old,omitempty"`
	StateStatus      *string                                  `json:"stateStatus,omitempty"`
	TemplateMetaName *string                                  `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffTasksNew struct {
	Cron        *string `json:"cron,omitempty"`
	Description *string `json:"description,omitempty"`
	Every       *string `json:"every,omitempty"`
	Name        *string `json:"name,omitempty"`
	Offset      *string `json:"offset,omitempty"`
	Query       *string `json:"query,omitempty"`
	Status      *string `json:"status,omitempty"`
}

type TemplateSummaryDiffTasksOld struct {
	Cron        *string `json:"cron,omitempty"`
	Description *string `json:"description,omitempty"`
	Every       *string `json:"every,omitempty"`
	Name        *string `json:"name,omitempty"`
	Offset      *string `json:"offset,omitempty"`
	Query       *string `json:"query,omitempty"`
	Status      *string `json:"status,omitempty"`
}

type TemplateSummaryDiffTasks struct {
	ID               *string                      `json:"id,omitempty"`
	Kind             *TemplateKindEnum            `json:"kind,omitempty"`
	New              *TemplateSummaryDiffTasksNew `json:"new,omitempty"`
	Old              *TemplateSummaryDiffTasksOld `json:"old,omitempty"`
	StateStatus      *string                      `json:"stateStatus,omitempty"`
	TemplateMetaName *string                      `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffTelegrafConfigs struct {
	ID               *string           `json:"id,omitempty"`
	Kind             *TemplateKindEnum `json:"kind,omitempty"`
	New              *TelegrafRequest  `json:"new,omitempty"`
	Old              *TelegrafRequest  `json:"old,omitempty"`
	StateStatus      *string           `json:"stateStatus,omitempty"`
	TemplateMetaName *string           `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiffVariablesNew struct {
	Args        map[string]interface{} `json:"args,omitempty"`
	Description *string                `json:"description,omitempty"`
	Name        *string                `json:"name,omitempty"`
}

type TemplateSummaryDiffVariablesOld struct {
	Args        map[string]interface{} `json:"args,omitempty"`
	Description *string                `json:"description,omitempty"`
	Name        *string                `json:"name,omitempty"`
}

type TemplateSummaryDiffVariables struct {
	ID               *string                          `json:"id,omitempty"`
	Kind             *TemplateKindEnum                `json:"kind,omitempty"`
	New              *TemplateSummaryDiffVariablesNew `json:"new,omitempty"`
	Old              *TemplateSummaryDiffVariablesOld `json:"old,omitempty"`
	StateStatus      *string                          `json:"stateStatus,omitempty"`
	TemplateMetaName *string                          `json:"templateMetaName,omitempty"`
}

type TemplateSummaryDiff struct {
	Buckets               []TemplateSummaryDiffBuckets               `json:"buckets,omitempty"`
	Checks                []TemplateSummaryDiffChecks                `json:"checks,omitempty"`
	Dashboards            []TemplateSummaryDiffDashboards            `json:"dashboards,omitempty"`
	LabelMappings         []TemplateSummaryDiffLabelMappings         `json:"labelMappings,omitempty"`
	Labels                []TemplateSummaryDiffLabels                `json:"labels,omitempty"`
	NotificationEndpoints []TemplateSummaryDiffNotificationEndpoints `json:"notificationEndpoints,omitempty"`
	NotificationRules     []TemplateSummaryDiffNotificationRules     `json:"notificationRules,omitempty"`
	Tasks                 []TemplateSummaryDiffTasks                 `json:"tasks,omitempty"`
	TelegrafConfigs       []TemplateSummaryDiffTelegrafConfigs       `json:"telegrafConfigs,omitempty"`
	Variables             []TemplateSummaryDiffVariables             `json:"variables,omitempty"`
}

type TemplateSummaryErrors struct {
	Fields  []string          `json:"fields,omitempty"`
	Indexes []int64           `json:"indexes,omitempty"`
	Kind    *TemplateKindEnum `json:"kind,omitempty"`
	Reason  *string           `json:"reason,omitempty"`
}

type TemplateSummarySummaryBuckets struct {
	Description       *string                 `json:"description,omitempty"`
	EnvReferences     []TemplateEnvReferences `json:"envReferences,omitempty"`
	ID                *string                 `json:"id,omitempty"`
	Kind              *TemplateKindEnum       `json:"kind,omitempty"`
	LabelAssociations []TemplateSummaryLabel  `json:"labelAssociations,omitempty"`
	Name              *string                 `json:"name,omitempty"`
	OrgID             *string                 `json:"orgID,omitempty"`
	RetentionPeriod   *int64                  `json:"retentionPeriod,omitempty"`
	TemplateMetaName  *string                 `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummaryChecks struct {
	EnvReferences     []TemplateEnvReferences `json:"envReferences,omitempty"`
	Kind              *TemplateKindEnum       `json:"kind,omitempty"`
	LabelAssociations []TemplateSummaryLabel  `json:"labelAssociations,omitempty"`
	TemplateMetaName  *string                 `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummaryDashboards struct {
	Charts            []TemplateChart         `json:"charts,omitempty"`
	Description       *string                 `json:"description,omitempty"`
	EnvReferences     []TemplateEnvReferences `json:"envReferences,omitempty"`
	ID                *string                 `json:"id,omitempty"`
	Kind              *TemplateKindEnum       `json:"kind,omitempty"`
	LabelAssociations []TemplateSummaryLabel  `json:"labelAssociations,omitempty"`
	Name              *string                 `json:"name,omitempty"`
	OrgID             *string                 `json:"orgID,omitempty"`
	TemplateMetaName  *string                 `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummaryLabelMappings struct {
	LabelID                  *string `json:"labelID,omitempty"`
	LabelName                *string `json:"labelName,omitempty"`
	LabelTemplateMetaName    *string `json:"labelTemplateMetaName,omitempty"`
	ResourceID               *string `json:"resourceID,omitempty"`
	ResourceName             *string `json:"resourceName,omitempty"`
	ResourceTemplateMetaName *string `json:"resourceTemplateMetaName,omitempty"`
	ResourceType             *string `json:"resourceType,omitempty"`
	Status                   *string `json:"status,omitempty"`
}

type TemplateSummarySummaryNotificationEndpoints struct {
	EnvReferences     []TemplateEnvReferences `json:"envReferences,omitempty"`
	Kind              *TemplateKindEnum       `json:"kind,omitempty"`
	LabelAssociations []TemplateSummaryLabel  `json:"labelAssociations,omitempty"`
	TemplateMetaName  *string                 `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummaryNotificationRulesStatusRules struct {
	CurrentLevel  *string `json:"currentLevel,omitempty"`
	PreviousLevel *string `json:"previousLevel,omitempty"`
}

type TemplateSummarySummaryNotificationRulesTagRules struct {
	Key      *string `json:"key,omitempty"`
	Operator *string `json:"operator,omitempty"`
	Value    *string `json:"value,omitempty"`
}

type TemplateSummarySummaryNotificationRules struct {
	Description              *string                                              `json:"description,omitempty"`
	EndpointID               *string                                              `json:"endpointID,omitempty"`
	EndpointTemplateMetaName *string                                              `json:"endpointTemplateMetaName,omitempty"`
	EndpointType             *string                                              `json:"endpointType,omitempty"`
	EnvReferences            []TemplateEnvReferences                              `json:"envReferences,omitempty"`
	Every                    *string                                              `json:"every,omitempty"`
	Kind                     *TemplateKindEnum                                    `json:"kind,omitempty"`
	LabelAssociations        []TemplateSummaryLabel                               `json:"labelAssociations,omitempty"`
	MessageTemplate          *string                                              `json:"messageTemplate,omitempty"`
	Name                     *string                                              `json:"name,omitempty"`
	Offset                   *string                                              `json:"offset,omitempty"`
	Status                   *string                                              `json:"status,omitempty"`
	StatusRules              []TemplateSummarySummaryNotificationRulesStatusRules `json:"statusRules,omitempty"`
	TagRules                 []TemplateSummarySummaryNotificationRulesTagRules    `json:"tagRules,omitempty"`
	TemplateMetaName         *string                                              `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummaryTasks struct {
	Cron             *string                 `json:"cron,omitempty"`
	Description      *string                 `json:"description,omitempty"`
	EnvReferences    []TemplateEnvReferences `json:"envReferences,omitempty"`
	Every            *string                 `json:"every,omitempty"`
	ID               *string                 `json:"id,omitempty"`
	Kind             *TemplateKindEnum       `json:"kind,omitempty"`
	Name             *string                 `json:"name,omitempty"`
	Offset           *string                 `json:"offset,omitempty"`
	Query            *string                 `json:"query,omitempty"`
	Status           *string                 `json:"status,omitempty"`
	TemplateMetaName *string                 `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummaryTelegrafConfigsMetadata struct {
	Buckets []string `json:"buckets,omitempty"`
}

type TemplateSummarySummaryTelegrafConfigs struct {
	Config            *string                                        `json:"config,omitempty"`
	Description       *string                                        `json:"description,omitempty"`
	EnvReferences     []TemplateEnvReferences                        `json:"envReferences,omitempty"`
	Kind              *TemplateKindEnum                              `json:"kind,omitempty"`
	LabelAssociations []TemplateSummaryLabel                         `json:"labelAssociations,omitempty"`
	Metadata          *TemplateSummarySummaryTelegrafConfigsMetadata `json:"metadata,omitempty"`
	Name              *string                                        `json:"name,omitempty"`
	OrgID             *string                                        `json:"orgID,omitempty"`
	TemplateMetaName  *string                                        `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummaryVariables struct {
	Arguments         map[string]interface{}  `json:"arguments,omitempty"`
	Description       *string                 `json:"description,omitempty"`
	EnvReferences     []TemplateEnvReferences `json:"envReferences,omitempty"`
	ID                *string                 `json:"id,omitempty"`
	Kind              *TemplateKindEnum       `json:"kind,omitempty"`
	LabelAssociations []TemplateSummaryLabel  `json:"labelAssociations,omitempty"`
	Name              *string                 `json:"name,omitempty"`
	OrgID             *string                 `json:"orgID,omitempty"`
	TemplateMetaName  *string                 `json:"templateMetaName,omitempty"`
}

type TemplateSummarySummary struct {
	Buckets               []TemplateSummarySummaryBuckets               `json:"buckets,omitempty"`
	Checks                []TemplateSummarySummaryChecks                `json:"checks,omitempty"`
	Dashboards            []TemplateSummarySummaryDashboards            `json:"dashboards,omitempty"`
	LabelMappings         []TemplateSummarySummaryLabelMappings         `json:"labelMappings,omitempty"`
	Labels                []TemplateSummaryLabel                        `json:"labels,omitempty"`
	MissingEnvRefs        []string                                      `json:"missingEnvRefs,omitempty"`
	MissingSecrets        []string                                      `json:"missingSecrets,omitempty"`
	NotificationEndpoints []TemplateSummarySummaryNotificationEndpoints `json:"notificationEndpoints,omitempty"`
	NotificationRules     []TemplateSummarySummaryNotificationRules     `json:"notificationRules,omitempty"`
	Tasks                 []TemplateSummarySummaryTasks                 `json:"tasks,omitempty"`
	TelegrafConfigs       []TemplateSummarySummaryTelegrafConfigs       `json:"telegrafConfigs,omitempty"`
	Variables             []TemplateSummarySummaryVariables             `json:"variables,omitempty"`
}

type TemplateSummary struct {
	Diff    *TemplateSummaryDiff    `json:"diff,omitempty"`
	Errors  []TemplateSummaryErrors `json:"errors,omitempty"`
	Sources []string                `json:"sources,omitempty"`
	StackID *string                 `json:"stackID,omitempty"`
	Summary *TemplateSummarySummary `json:"summary,omitempty"`
}
