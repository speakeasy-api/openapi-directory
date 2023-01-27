package shared

type ClientLibrarySettingsLaunchStageEnum string

const (
	ClientLibrarySettingsLaunchStageEnumLaunchStageUnspecified ClientLibrarySettingsLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	ClientLibrarySettingsLaunchStageEnumUnimplemented          ClientLibrarySettingsLaunchStageEnum = "UNIMPLEMENTED"
	ClientLibrarySettingsLaunchStageEnumPrelaunch              ClientLibrarySettingsLaunchStageEnum = "PRELAUNCH"
	ClientLibrarySettingsLaunchStageEnumEarlyAccess            ClientLibrarySettingsLaunchStageEnum = "EARLY_ACCESS"
	ClientLibrarySettingsLaunchStageEnumAlpha                  ClientLibrarySettingsLaunchStageEnum = "ALPHA"
	ClientLibrarySettingsLaunchStageEnumBeta                   ClientLibrarySettingsLaunchStageEnum = "BETA"
	ClientLibrarySettingsLaunchStageEnumGa                     ClientLibrarySettingsLaunchStageEnum = "GA"
	ClientLibrarySettingsLaunchStageEnumDeprecated             ClientLibrarySettingsLaunchStageEnum = "DEPRECATED"
)

// ClientLibrarySettings
// Details about how and where to publish client libraries.
type ClientLibrarySettings struct {
	CppSettings      *CppSettings                          `json:"cppSettings,omitempty"`
	DotnetSettings   *DotnetSettings                       `json:"dotnetSettings,omitempty"`
	GoSettings       *GoSettings                           `json:"goSettings,omitempty"`
	JavaSettings     *JavaSettings                         `json:"javaSettings,omitempty"`
	LaunchStage      *ClientLibrarySettingsLaunchStageEnum `json:"launchStage,omitempty"`
	NodeSettings     *NodeSettings                         `json:"nodeSettings,omitempty"`
	PhpSettings      *PhpSettings                          `json:"phpSettings,omitempty"`
	PythonSettings   *PythonSettings                       `json:"pythonSettings,omitempty"`
	RestNumericEnums *bool                                 `json:"restNumericEnums,omitempty"`
	RubySettings     *RubySettings                         `json:"rubySettings,omitempty"`
	Version          *string                               `json:"version,omitempty"`
}
