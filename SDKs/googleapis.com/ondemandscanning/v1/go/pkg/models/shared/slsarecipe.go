// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SlsaRecipe - Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
type SlsaRecipe struct {
	// Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different.
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	// Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64.
	DefinedInMaterial *string `json:"definedInMaterial,omitempty"`
	// String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use.
	EntryPoint *string `json:"entryPoint,omitempty"`
	// Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different.
	Environment map[string]interface{} `json:"environment,omitempty"`
	// URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials.
	Type *string `json:"type,omitempty"`
}
