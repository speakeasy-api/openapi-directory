package shared

// Assembly
// A description of groups of sites that are statistically correlated.
//
// - **Examples** (for each entry of the assemblies list):
//   - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.
//     Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.
//   - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.
//     The second group is formed by the fourth site. Sites of the first group (the second and the third) are never present at the same time as the fourth site.
//     30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).
type Assembly struct {
	GroupProbabilities []float64 `json:"group_probabilities"`
	SitesInGroups      [][]int64 `json:"sites_in_groups"`
}
