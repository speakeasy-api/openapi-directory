// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type PlayerDetail struct {
	Active                              *bool         `json:"Active,omitempty"`
	Age                                 *int64        `json:"Age,omitempty"`
	AverageDraftPosition                *float64      `json:"AverageDraftPosition,omitempty"`
	BirthDate                           *string       `json:"BirthDate,omitempty"`
	BirthDateString                     *string       `json:"BirthDateString,omitempty"`
	ByeWeek                             *int64        `json:"ByeWeek,omitempty"`
	College                             *string       `json:"College,omitempty"`
	CollegeDraftPick                    *int64        `json:"CollegeDraftPick,omitempty"`
	CollegeDraftRound                   *int64        `json:"CollegeDraftRound,omitempty"`
	CollegeDraftTeam                    *string       `json:"CollegeDraftTeam,omitempty"`
	CollegeDraftYear                    *int64        `json:"CollegeDraftYear,omitempty"`
	CurrentStatus                       *string       `json:"CurrentStatus,omitempty"`
	CurrentTeam                         *string       `json:"CurrentTeam,omitempty"`
	DeclaredInactive                    *bool         `json:"DeclaredInactive,omitempty"`
	DepthDisplayOrder                   *int64        `json:"DepthDisplayOrder,omitempty"`
	DepthOrder                          *int64        `json:"DepthOrder,omitempty"`
	DepthPosition                       *string       `json:"DepthPosition,omitempty"`
	DepthPositionCategory               *string       `json:"DepthPositionCategory,omitempty"`
	DraftKingsName                      *string       `json:"DraftKingsName,omitempty"`
	DraftKingsPlayerID                  *int64        `json:"DraftKingsPlayerID,omitempty"`
	Experience                          *int64        `json:"Experience,omitempty"`
	ExperienceString                    *string       `json:"ExperienceString,omitempty"`
	FanDuelName                         *string       `json:"FanDuelName,omitempty"`
	FanDuelPlayerID                     *int64        `json:"FanDuelPlayerID,omitempty"`
	FantasyAlarmPlayerID                *int64        `json:"FantasyAlarmPlayerID,omitempty"`
	FantasyDraftName                    *string       `json:"FantasyDraftName,omitempty"`
	FantasyDraftPlayerID                *int64        `json:"FantasyDraftPlayerID,omitempty"`
	FantasyPosition                     *string       `json:"FantasyPosition,omitempty"`
	FantasyPositionDepthOrder           *int64        `json:"FantasyPositionDepthOrder,omitempty"`
	FirstName                           *string       `json:"FirstName,omitempty"`
	GlobalTeamID                        *int64        `json:"GlobalTeamID,omitempty"`
	Height                              *string       `json:"Height,omitempty"`
	HeightFeet                          *int64        `json:"HeightFeet,omitempty"`
	HeightInches                        *int64        `json:"HeightInches,omitempty"`
	InjuryBodyPart                      *string       `json:"InjuryBodyPart,omitempty"`
	InjuryNotes                         *string       `json:"InjuryNotes,omitempty"`
	InjuryPractice                      *string       `json:"InjuryPractice,omitempty"`
	InjuryPracticeDescription           *string       `json:"InjuryPracticeDescription,omitempty"`
	InjuryStartDate                     *string       `json:"InjuryStartDate,omitempty"`
	InjuryStatus                        *string       `json:"InjuryStatus,omitempty"`
	IsUndraftedFreeAgent                *bool         `json:"IsUndraftedFreeAgent,omitempty"`
	LastName                            *string       `json:"LastName,omitempty"`
	LatestNews                          []News        `json:"LatestNews,omitempty"`
	Name                                *string       `json:"Name,omitempty"`
	Number                              *int64        `json:"Number,omitempty"`
	PhotoURL                            *string       `json:"PhotoUrl,omitempty"`
	PlayerID                            *int64        `json:"PlayerID,omitempty"`
	PlayerSeason                        *PlayerSeason `json:"PlayerSeason,omitempty"`
	Position                            *string       `json:"Position,omitempty"`
	PositionCategory                    *string       `json:"PositionCategory,omitempty"`
	RotoWirePlayerID                    *int64        `json:"RotoWirePlayerID,omitempty"`
	RotoworldPlayerID                   *int64        `json:"RotoworldPlayerID,omitempty"`
	ShortName                           *string       `json:"ShortName,omitempty"`
	SportRadarPlayerID                  *string       `json:"SportRadarPlayerID,omitempty"`
	SportsDirectPlayerID                *int64        `json:"SportsDirectPlayerID,omitempty"`
	StatsPlayerID                       *int64        `json:"StatsPlayerID,omitempty"`
	Status                              *string       `json:"Status,omitempty"`
	Team                                *string       `json:"Team,omitempty"`
	TeamID                              *int64        `json:"TeamID,omitempty"`
	UpcomingDraftKingsSalary            *int64        `json:"UpcomingDraftKingsSalary,omitempty"`
	UpcomingFanDuelSalary               *int64        `json:"UpcomingFanDuelSalary,omitempty"`
	UpcomingGameOpponent                *string       `json:"UpcomingGameOpponent,omitempty"`
	UpcomingGameWeek                    *int64        `json:"UpcomingGameWeek,omitempty"`
	UpcomingOpponentPositionRank        *int64        `json:"UpcomingOpponentPositionRank,omitempty"`
	UpcomingOpponentRank                *int64        `json:"UpcomingOpponentRank,omitempty"`
	UpcomingSalary                      *int64        `json:"UpcomingSalary,omitempty"`
	UpcomingYahooSalary                 *int64        `json:"UpcomingYahooSalary,omitempty"`
	UsaTodayHeadshotNoBackgroundUpdated *string       `json:"UsaTodayHeadshotNoBackgroundUpdated,omitempty"`
	UsaTodayHeadshotNoBackgroundURL     *string       `json:"UsaTodayHeadshotNoBackgroundUrl,omitempty"`
	UsaTodayHeadshotUpdated             *string       `json:"UsaTodayHeadshotUpdated,omitempty"`
	UsaTodayHeadshotURL                 *string       `json:"UsaTodayHeadshotUrl,omitempty"`
	UsaTodayPlayerID                    *int64        `json:"UsaTodayPlayerID,omitempty"`
	Weight                              *int64        `json:"Weight,omitempty"`
	XMLTeamPlayerID                     *int64        `json:"XmlTeamPlayerID,omitempty"`
	YahooName                           *string       `json:"YahooName,omitempty"`
	YahooPlayerID                       *int64        `json:"YahooPlayerID,omitempty"`
}
